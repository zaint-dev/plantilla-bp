import React, { useEffect, useRef } from 'react';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { Fab, Icon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import withReducer from 'app/store/withReducer';
import ProductsTable from './ProductsTable';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import { makeStyles } from '@material-ui/styles';
import ProductDialog from './ProductDialog';
import ProductsHeader from './ProductsHeader';


const useStyles = makeStyles({
    addButton: {
        position: 'fixed',
        right: 12,
        bottom: 80,
        zIndex: 99,


        
    }
});

function ProductsContainer(props) {


    const dispatch = useDispatch();

    const classes = useStyles(props);
    const pageLayout = useRef(null);

    useEffect(() => {
        dispatch(Actions.getProducts());
        return () => {
            dispatch(Actions.resetProducts());
        }
    }, [dispatch]);


    return (
        <React.Fragment>
            <FusePageCarded
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <ProductsHeader pageLayout={pageLayout}/>
                }
                contentToolbar={
                    <div className="px-24"><h4>Gestión de Productos</h4></div>
                }
                content={
                    <div className="p-24">
                        <h4>Contenido</h4>
                        <br />
                        <ProductsTable />

                    </div>
                }
            />
            <FuseAnimate animation="transition.expandIn" delay={300}>
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.addButton}
                    onClick={ev => dispatch(Actions.openNewProductDialog())}
                >
                    <Icon>person_add</Icon>
                </Fab>
            </FuseAnimate>
            <ProductDialog />
        </React.Fragment>
    )
}

export default withReducer('productsApp', reducer)(ProductsContainer);