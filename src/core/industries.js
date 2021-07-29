import React, { useEffect, useState } from 'react';
import { get } from '../services/industries.service';
import { MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Industries = () => {
    const [industries, setIndustries] = useState([]);
    const [datatable, setDatatable] = React.useState({});

    useEffect(() => {
        let mounted = true;
        get()
          .then(items => {
            if(mounted) {
                setIndustries(items)

                const data = {
                    columns: [
                        {
                            label: 'Title',
                            field: 'title',
                            sort: 'asc',
                          },
                          {
                            label: 'SIC Number',
                            field: 'sic_code',
                            sort: 'asc',
                          },
                    ],
                    rows: items
                }

                setDatatable(data)
            }
          })
        return () => mounted = false;
    }, []);
    
    return (
        <MDBDataTable
            striped
            bordered
            small
            data={datatable}
            />
    );
}

export default Industries;