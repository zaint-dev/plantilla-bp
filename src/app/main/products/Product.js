import React, { useEffect, useState } from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils } from '@fuse';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import _ from '@lodash';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers'


function Product(props) {
    const dispatch = useDispatch();
    const product = useSelector(({ ProductApp }) => ProductApp.product);

    const [tabValue, setTabValue] = useState(0);


    useEffect(() => {
        dispatch(Actions.getProduct(props.match.params));

        // return () => {
        //     dispatch(Actions.resetBoard());
        // }
    }, [dispatch, props.match.params]);

    function handleChangeTab(event, tabValue) {
        setTabValue(tabValue);
    }


    if (!product) {
        return null;
    }

    return (
        <FusePageCarded
            classes={{
                toolbar: "p-0",
                header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-col items-start max-w-full">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/e-commerce/products" color="inherit">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Products
                            </Typography>
                            </FuseAnimate>
                        </div>

                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{ root: "w-full h-64" }}
                >
                    <Tab className="h-64 normal-case" label="Información del Producto" />
                    <Tab className="h-64 normal-case" label="Imagenes Producto" />
                    <Tab className="h-64 normal-case" label="Precio de Producto" />
                </Tabs>
            }
            content={
                (
                    <div className="p-16 sm:p-24 max-w-2xl">
                        {tabValue === 0 &&
                            (
                                <div>
                                    <Typography variant="h6">Información</Typography>
                                </div>
                            )}
                        {tabValue === 1 && (
                            <div>
                                <Typography variant="h6">Imagenes</Typography>
                            </div>
                        )}
                        {tabValue === 2 && (
                            <div>
                                <Typography variant="h6">Precio</Typography>
                            </div>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )

}

export default withReducer('ProductApp', reducer)(Product);


