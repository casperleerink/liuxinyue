import CMS from 'netlify-cms-app';


// import cloudinary from 'netlify-cms-media-library-cloudinary';
import StillPreview from './preview-templates/StillPreview'

CMS.registerPreviewStyle('../../layout.scss');
CMS.registerPreviewTemplate('still', StillPreview);
// CMS.registerMediaLibrary(cloudinary);