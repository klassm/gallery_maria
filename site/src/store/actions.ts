export function loadImages() {
  return {
    type: actionTypes.LOAD_IMAGES,
    payload: {
      request: {
        method: 'get',
        url: '/config.json',
      },
    },
  };
}

export const actionTypes = {
  LOAD_IMAGES: 'LOAD_IMAGES',
  INITIAL_PAGE_LOAD: 'INITIAL_PAGE_LOAD'
};