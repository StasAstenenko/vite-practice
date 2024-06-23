export function galleryTemplate(imgs) {
  return imgs
    .map(
      img =>
        `<li id="${img.id}" class="gallery__item"><img src="${img.urls.small}" alt="${img.alt_description}"></li>`
    )
    .join('');
}
