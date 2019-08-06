import * as globalActions from 'app/store/actions';

export default function showMessage(dispatch, message, variant, duration = 1000) {
    dispatch(
        globalActions.showMessage({
            message: message,
            autoHideDuration: duration,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            variant: variant
        }))
}