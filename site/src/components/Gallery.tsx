import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { Image, ImageData } from '../types';
// @ts-ignore
import GridGallery from 'react-grid-gallery';

export interface OuterProps {
  albumId: string
}

export interface StateProps {
  images: ImageData
}

class Gallery extends Component<OuterProps & StateProps> {

  private getPhotos(): Image[] {
    return this.props.images[this.props.albumId] || [];
  }

  private getThumbnailWidthAndHeight(photo: Image) {
    const targetWidth = 320;
    const targetHeight = 212;
    const { height, width } = photo;
    const ratio = height > width ? targetHeight / height : targetWidth / width;
    return { width: Math.floor(width * ratio), height: Math.floor(height * ratio) };
  }

  public render() {
    const albumPhotos: Image[] = this.getPhotos().reverse();
    const images = albumPhotos.map(photo => {
      const { width: thumbnailWidth, height: thumbnailHeight} = this.getThumbnailWidthAndHeight(photo);
      return {
        src: photo.path,
        thumbnail: photo.thumbnailPath,
        thumbnailWidth,
        thumbnailHeight
      }
    });

    return images.length === 0 ? '<p>not found</p>' : <GridGallery images={images} enableImageSelection={false}/>
  }
}

export function mapStateToProps(state: RootState): StateProps {
  const images = state.images || {};
  return {
    images
  };
}


export default connect<StateProps, OuterProps, RootState>(
  mapStateToProps
)(Gallery);
