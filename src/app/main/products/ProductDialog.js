import React, { useEffect, useCallback } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar } from '@material-ui/core';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

const defaultFormState = {
    id: '',
    title: '',
    store: '',
    price: '',
    stock: '',
};



function ProductDialog(props) {
    const dispatch = useDispatch();
    const productDialog = useSelector(({ productsApp }) => productsApp.products.productDialog);
    console.log(productDialog)

    const { form, handleChange, setForm } = useForm(defaultFormState);


    const initDialog = useCallback(
        () => {
            /**
             * Dialog type: 'edit'
             */
            if (productDialog.type === 'edit' && productDialog.data) {
                setForm({ ...productDialog.data });
            }

            /**
             * Dialog type: 'new'
             */
            if (productDialog.type === 'new') {
                setForm({
                    ...defaultFormState,
                    ...productDialog.data,
                    id: FuseUtils.generateGUID()
                });
            }
        },
        [productDialog.data, productDialog.type, setForm],
    );

    useEffect(() => {
        /**
         * After Dialog Open
         */
        if (productDialog.props.open) {
            initDialog();
        }

    }, [productDialog.props.open, initDialog]);



    function closeComposeDialog() {
        productDialog.type === 'edit' ? dispatch(Actions.closeEditProducttDialog()) : dispatch(Actions.closeNewProductDialog());
    }

    function canBeSubmitted() {
        return (
            form.title.length > 0
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (productDialog.type === 'new') {
            dispatch(Actions.addProduct(form));
        }
        else {
            dispatch(Actions.updateProduct(form));
        }
        closeComposeDialog();
    }

    function handleRemove() {
        dispatch(Actions.removeProduct(form.id));
        closeComposeDialog();
    }




    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...productDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
        >

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {productDialog.type === 'new' ? 'Nuevo Producto' : 'Editar Producto'}
                    </Typography>
                </Toolbar>
                <div className="flex flex-col items-center justify-center pb-24">
                    {/* <Avatar className="w-96 h-96" alt="contact avatar" src={form.avatar} /> */}
                    {productDialog.type === 'edit' && (
                        <Typography variant="h6" color="inherit" className="pt-8">
                            {form.title}
                        </Typography>
                    )}
                </div>
            </AppBar>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{ root: "p-24" }}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">chrome_reader_mode</Icon>
                        </div>

                        <TextField
                            className="mb-24"
                            label="Titulo"
                            autoFocus
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">shopping_cart</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Tienda"
                            id="store"
                            name="store"
                            value={form.store}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">monetization_on</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Precio"
                            id="price"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">filter_1</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Stock"
                            id="stock"
                            name="stock"
                            value={form.stock}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                </DialogContent>

                {productDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canBeSubmitted()}
                        >
                            Agregar
                        </Button>
                    </DialogActions>
                ) : (
                        <DialogActions className="justify-between pl-16">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!canBeSubmitted()}
                            >
                                Guardar
                        </Button>
                            <IconButton
                                onClick={handleRemove}
                            >
                                <Icon>delete</Icon>
                            </IconButton>
                        </DialogActions>
                    )}
            </form>
        </Dialog>
    );
}



export default ProductDialog;