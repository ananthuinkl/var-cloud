"use client";
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Electrical = () => {
  // Data from the user requirement
  const data = [
    { id: 1, description: 'Total Number Of Light Fixture', quantity: 1, unit: 'No' },
    { id: 2, description: 'Number Of Light Points at 1 Circuit', quantity: 1, unit: 'No' },
    { id: 3, description: 'No Of Circuit', quantity: 1, unit: 'No' },
    { id: 4, description: 'Conduit Length from Trunking to First Light Point', quantity: 1, unit: 'm' },
    { id: 5, description: 'Wire Length from DB to First Light Point', quantity: 1, unit: 'm' },
    { id: 6, description: 'Void Height', quantity: 1, unit: 'm' },
    { id: 7, description: 'Length between Light Point', quantity: 1, unit: 'm' },
    { id: 8, description: 'Ceiling Rose to Light Fixture', quantity: 1, unit: 'm' },
    { id: 9, description: 'Length between Saddles', quantity: 1, unit: 'm' },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ fontSize: '18pt', backgroundColor: '#d1e7fd', padding: '10px' }}
      >
        Electrical User Requirement
      </Typography>
      <Table sx={{ fontSize: '12pt' }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#cfe2f3' }}>
            <TableCell align="center" sx={{ fontSize: '12pt' }}><strong>Sl No</strong></TableCell>
            <TableCell sx={{ fontSize: '12pt' }}><strong>Description</strong></TableCell>
            <TableCell align="center" sx={{ fontSize: '12pt' }}><strong>Quantity</strong></TableCell>
            <TableCell align="center" sx={{ fontSize: '12pt' }}><strong>Unit</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} sx={{ backgroundColor: '#f1f5f9' }}>
              <TableCell align="center" sx={{ fontSize: '12pt' }}>{item.id}</TableCell>
              <TableCell sx={{ fontSize: '12pt' }}>{item.description}</TableCell>
              <TableCell align="center" sx={{ fontSize: '12pt' }}>{item.quantity}</TableCell>
              <TableCell align="center" sx={{ fontSize: '12pt' }}>{item.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Electrical;
