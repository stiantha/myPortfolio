function showCertificate(certificateName) {
  var certificateImage = document.getElementById('certificate-image');
  var imageContainer = document.getElementById('image-container');
  var certificatesSection = document.getElementById('certificates');

  // Google Certificate
  switch (certificateName) {
    case 'certificate1':
      certificateImage.src = 'certificates/1.Google IT Support.png';
      break;
    case 'certificate2':
      certificateImage.src = 'certificates/2.Google IT Automation with Python.png';
      break;
    case 'certificate3':
      certificateImage.src = 'certificates/3.Google Advanced Data Analytics Certificate.png';
      break;
    case 'certificate4':
      certificateImage.src = 'certificates/4.Google Data Analytics Certificate.png';
      break;
    case 'certificate5':
      certificateImage.src = 'certificates/5.Google Cybersecurity.png';
      break;
    case 'certificate6':
      certificateImage.src = 'certificates/6.Google Business Intelligence Certificate.png';
      break;


      // Univercity of Michigan certificates
    case 'certificate7':
      certificateImage.src = 'certificates/7.UOM Python for Everybody - Spec.png';
      break;
    case 'certificate9':
      certificateImage.src = '';
      break;
    case 'certificate10':
      certificateImage.src = '';
      break;
    case 'certificate11':
      certificateImage.src = '';
      break;
    case 'certificate12':
      certificateImage.src = '';
      break;
    case 'certificate13':
      certificateImage.src = 'certificates/13.SU Machine Learning Specialization.png';
      break;
      case 'certificate14':
      certificateImage.src = 'certificates/14.DLS Learning How to Learn, Powerful mental tools.png';
      break;
      case 'certificate15':
        certificateImage.src = 'certificates/15.Html, CSS, Javascript for Web Developers.png';
        break;
    default:
      certificateImage.src = '0.placeholder.png';
  }

  // Show the image container
  imageContainer.style.display = 'block';

  // Hide the image container after 3 seconds (3000 milliseconds)
// Hide the image container and set the placeholder image after 3 seconds (3000 milliseconds)

}
