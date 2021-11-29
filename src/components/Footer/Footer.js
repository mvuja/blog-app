import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './footer.modules.css'
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Item style={{backgroundColor: '#F4F4F4'}}>
              <h5 style={{color: '#33A4D8', fontSize: '24px', fontWeight: '400', margin: '20px'}}>Do you want to get our latest updates?</h5>
              <p style={{margin: '20px', lineHeight: '2'}}>Please subscribe our newsletter for upcoming new videos and latest information about our work. Thank you.</p>
              <div className="newsletter">
                  <input type="email" placeholder="Your Email..." />
                  <Button variant="contained" href="#main" style={{backgroundColor:'#4620ce', padding:'10px 25px', fontSize:'14px'}}>
                    Subscribe
                </Button>
              </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{backgroundColor: '#F4F4F4'}}>
              
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{backgroundColor: '#F4F4F4'}}>
              
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}