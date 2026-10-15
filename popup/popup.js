const preview = document.querySelector('.vc-preview')
const container = document.querySelector('.vc-preview-container')
const message = document.querySelector('.vc-message')

const DOWNLOAD_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/></svg>';

const COPY_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 9h10a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V10a1 1 0 011-1zM16 9V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/></svg>';
const CHECK_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/></svg>';

message.innerText = 'No video was found on this page';

async function copyImage(imgDataURL, button){
    const label = button.querySelector('span');
    try {
        const blob = await (await fetch(imgDataURL)).blob();
        await navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})]);
        button.classList.add('is-copied');
        button.innerHTML = `${CHECK_ICON}<span>Copied</span>`;
    } catch (err) {
        console.error(err);
        button.classList.add('is-error');
        label.innerText = 'Failed';
    }
    clearTimeout(button._resetTimer);
    button._resetTimer = setTimeout(()=>{
        button.classList.remove('is-copied', 'is-error');
        button.innerHTML = `${COPY_ICON}<span>Copy</span>`;
    }, 1500);
}

function listImagePreview(response, tab){
    container.innerHTML = ''

    const webPathSplit = response.site.path.split('/');
    const filename = `${webPathSplit[webPathSplit.length - 1]}.png`;

    response.images.forEach((imgDataURL, index)=>{
        const card = document.createElement('div');
        card.className = 'vc-card';

        const link = document.createElement('a');
        link.className = 'vc-card-link';
        link.href = imgDataURL;
        link.download = filename;
        const img = document.createElement('img');
        img.src = imgDataURL;
        link.appendChild(img);

        const meta = document.createElement('div');
        meta.className = 'vc-card-meta';
        const label = document.createElement('span');
        label.innerHTML = `<span class="vc-card-label">Video ${index + 1}</span>`;
        const size = document.createElement('span');
        img.addEventListener('load', ()=>{
            size.innerText = ` · ${img.naturalWidth}×${img.naturalHeight}`;
        });
        label.appendChild(size);

        const actions = document.createElement('div');
        actions.className = 'vc-actions';
        const copy = document.createElement('button');
        copy.type = 'button';
        copy.className = 'vc-btn vc-copy';
        copy.innerHTML = `${COPY_ICON}<span>Copy</span>`;
        copy.addEventListener('click', ()=>copyImage(imgDataURL, copy));
        const download = document.createElement('a');
        download.className = 'vc-btn vc-download';
        download.href = imgDataURL;
        download.download = filename;
        download.innerHTML = `${DOWNLOAD_ICON}<span>Save PNG</span>`;
        actions.append(copy, download);

        meta.append(label, actions);
        card.append(link, meta);
        container.appendChild(card);
    })

    if (response.images.length > 0){
        message.innerText = `${response.images.length} video(s) found on this page`
        preview.classList.add('has-items');
    }
}

(async () => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  if (tab) {
    const response = await chrome.tabs.sendMessage(tab.id, {event: 'vc-popup-open'});
    listImagePreview(response, tab);
  }
})();
