import React, { Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ImageData } from '../types';
import { RootState } from '../store/store';
import { connect } from 'react-redux';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import shuffle from '../utils/shuffle';

export interface StateProps {
  images: ImageData
}

class Home extends Component<StateProps> {
  private getPhotos(): ReactImageGalleryItem[] {
    const all = this.props.images || {};
    return shuffle(Object.values(all)
      .map((images) => images.slice(images.length - 4, images.length))
      .reduce((a, b) => [...a, ...b], [])
      .map(photo => ({
        original: photo.path,
        thumbnail: photo.thumbnailPath
      })));
  }

  render() {
    return (
      <div>
        <ImageGallery items={this.getPhotos()} autoPlay={true}/>
      </div>
    );
  }
}

export function mapStateToProps(state: RootState): StateProps {
  const images = state.images || {};
  return {
    images
  };
}


export default connect<StateProps, StateProps, RootState>(
  mapStateToProps
)(Home);
