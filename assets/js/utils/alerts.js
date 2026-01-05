// Import SweetAlert2 for beautiful notifications
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.26.17/+esm';
/**
          * Shows a SweetAlert2 error notification
          * @param {string} message - The error message to display
          */
export function showErrorAlert(message) {
  Swal.fire({
    icon: 'error',
    title: 'An Error Occurred', //generic title
    text: message,
    confirmButtonText: 'Try Again',
    customClass: {
      confirmButton: 'swal2-confirm'
    }
  });
}
/**
 * Shows a SweetAlert2 success notification
 * @param {string} message - The success message to display
 */
export function showSuccessAlert(message) {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  });
}