//
function rollup(element) {
  if (!element) return;
  if (element.children.length === 0) return;
  const fstChild = element.children[0];
  [...element.children].slice(1)
    .forEach((child) => {
      fstChild.append(child);
    });
}

export default function decorate(block) {
  const ul = document.createElement('ul');
  let gearListDiv;
  let itineraryDiv;
  let descriptionDiv;
  let primaryImage;
  let title;
  [...block.children].forEach((row) => {
    rollup(row.children[1]);
    if (row.children[0].textContent === 'title') {
      title = row.children[1];
      title.className = 'adventure-title';
      return;
    }
    if (row.children[0].textContent === 'gearList') {
      gearListDiv = row.children[1];
      return;
    }
    if (row.children[0].textContent === 'itinerary') {
      itineraryDiv = row.children[1];
      return;
    }
    if (row.children[0].textContent === 'description') {
      descriptionDiv = row.children[1];
      return;
    }
    if (row.children[0].textContent === 'primaryImage') {
      primaryImage = row.children[1];
      return;
    }
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    li.children[0].className = 'adventure-field-name';
    li.children[1].className = 'adventure-field-value';
    ul.append(li);
  });
  // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(title);
  block.append(primaryImage);
  block.append(descriptionDiv);
  block.append(itineraryDiv);
  block.append(gearListDiv);
  block.append(ul);
}
