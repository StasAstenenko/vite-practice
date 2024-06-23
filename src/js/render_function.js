export function galleryTemplate(imgs) {
  return imgs
    .map(
      ({ id, urls: { small }, alt_description }) =>
        `<li id="${id}" class="gallery__item"><img src="${small}" alt="${alt_description}"></li>`
    )
    .join('');
}
