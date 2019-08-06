import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Icon, IconButton, Typography } from '@material-ui/core';
import { FuseUtils, FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from "react-table";
import * as Actions from './store/actions';
import reducer from './store/reducers'
import withReducer from 'app/store/withReducer';
import { Link, withRouter } from 'react-router-dom';

function ProductsTable(props) {
    const dispatch = useDispatch();
    const products = useSelector(({ productsApp }) => productsApp.products.entities);
    const searchText = useSelector(({productsApp}) => productsApp.products.searchText);

    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( products )
        {
            setFilteredData(getFilteredArray(products, searchText));
        }
    }, [products, searchText]);

    if (!filteredData) {
        return null;
    }

    if (filteredData.length === 0) {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    No hay productos!
                </Typography>
            </div>
        );
    }


    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        onClick: (e, handleOriginal) => {
                            if (rowInfo) {
                                dispatch(Actions.openEditProductDialog(rowInfo.original));
                            }
                        }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header: "Producto",
                        accessor: "title",
                        filterable: true,
                        className: "font-bold"
                    },
                    {
                        Header: "Tienda",
                        accessor: "store",
                        filterable: true,
                        className: "font-bold"
                    },
                    {
                        Header: "Precio",
                        accessor: "price",
                        filterable: true
                    },
                    {
                        Header: "Stock",
                        accessor: "stock",
                        filterable: true
                    },
                    {
                        Header: "",
                        width: 128,
                        Cell: row => (
                            <div className="flex items-center">

                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeProduct(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        props.history.push('/product/' + row.original.id + '/details');
                                    }}
                                >
                                    <Icon>remove_red_eye</Icon>
                                </IconButton>

                            </div>
                        )
                    }

                ]}
                defaultPageSize={5}
                noDataText="No se encontraron productos"
            />
        </FuseAnimate>
    );
}

export default withRouter(ProductsTable);
