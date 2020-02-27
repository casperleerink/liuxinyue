import CMS from 'netlify-cms-app';


// import cloudinary from 'netlify-cms-media-library-cloudinary';
import StillPreview from './preview-templates/StillPreview'

CMS.registerPreviewStyle('../../layout.scss');
CMS.registerPreviewTemplate('still', StillPreview);
// CMS.registerMediaLibrary(cloudinary);


CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^youtube (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return 'youtube ' + obj.id;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`
      );
    }
});
  
// CMS.registerEditorComponent({
//     id: "double-image",
//     label: "Double Image",
//     fields: [
//         {name: "firstImage", label: "Image 1", widget: "image"},
//         {name: "secondImage", label: "Image 2", widget: "image"}
//     ],
//     pattern:  /^\| (!\[.*\) )(!\[.*\))/,
//     fromBlock: function(match) {
//         return {
//             firstImage: match[1],
//             secondImage: match[2],
//         };
//     },
//     toBlock: function(obj) {
//         return (
//             `
//             [[double]]
//             | ${firstImage} ${secondImage}`
//         )
//     }

// })