import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DemoUseState from './DemoUseState';
import DemoUseEffect from './DemoUseEffect';
import DemoUseRef from './DemoUseRef';
import DemoUseCallback from './DemoUseCallback';
import DemoUseMemo from './DemoUseMemo';
import DemoUseTransition from './DemoUseTransition';
import DemoUse from './DemoUse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '../../src/App.css';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: 'flex',
  color: '#FF8C00',
  fontWeight: 700,
  height: '200px',
  fontSize: '35px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function DisplayScreen() {
    const [openUseState, setOpenUseState] = React.useState(false);
    const [openUseEffect, setOpenUseEffect] = React.useState(false);
    const [openUseRef, setOpenUseRef] = React.useState(false);
    const [openUseCallback, setOpenUseCallback] = React.useState(false);
    const [openUseTransition, setOpenUseTransition] = React.useState(false);
    const [openUseMemo, setOpenUseMemo] = React.useState(false);
    const [openUse, setOpenUse] = React.useState(false);


    const handleClickOpen = (prop) => {
        switch(prop) {
            case 'useState':
                setOpenUseState(true);
                //break;
            case 'useEffect':
                setOpenUseEffect(true);
                break;
            case 'useRef':
                setOpenUseRef(true);
                break;  
            case 'useMemo':
              setOpenUseMemo(true);
              //break;
            case 'useCallback':
                setOpenUseCallback(true);
                break;
            case 'useTransition':
                setOpenUseTransition(true);
                break;       
            default:
                break;    
        }
    };
    
    const handleClose = (prop) => {
        switch(prop) {
            case 'useState':
                setOpenUseState(false);
                break;
            case 'useEffect':
                setOpenUseEffect(false);
                break;
            case 'useRef':
                setOpenUseRef(false);
                break;  
            case 'useMemo':
              setOpenUseMemo(false);
              //break;
            case 'useCallback':
                setOpenUseCallback(false);
                break;
            case 'useTransition':
                setOpenUseTransition(false);
                break;       
            case 'use':
              setOpenUse(false); 
            default:
                break;    
        }
    };

      let closeimg = {cursor:'pointer', float:'right', margintop: '5px', width: '20px'};
  
  return (
    <Box sx={{ flexGrow: 1, padding: '60px 25px 0px 25px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key={0}>
            <div onClick={()=>setOpenUseState(true)}>
                <Item >UseState</Item>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1} onClick={()=>setOpenUseEffect(true)} >
            <Item>UseEffect</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={2} onClick={()=>setOpenUseRef(true)}>
            <Item>UseRef</Item>
          </Grid>
      </Grid>
      <div style={{paddingBottom: '40px'}}>      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} key={0}>
            <div onClick={()=>setOpenUseCallback(true)}>
                <Item >UseCallback</Item>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1} onClick={()=>setOpenUseMemo(true)} >
            <Item>UseMemo</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={2} onClick={()=>setOpenUseTransition(true)}>
            <Item>UseTransition</Item>
          </Grid>
      </Grid>

      <div style={{paddingBottom: '40px'}}>      </div>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
          <Grid item xs={2} sm={4} md={4} key={2} onClick={()=>setOpenUse(true)} >
            <Item>Use</Item>
          </Grid>
          
      </Grid>
      
      <Dialog
        open={openUseState}
        onClose={()=>handleClose('useState')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          UseState Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('useState')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUseState />
          </DialogContent>
      </Dialog>

      <Dialog
        open={openUseEffect}
        onClose={()=>handleClose('useEffect')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          UseEffect Example:
        </DialogTitle>
        <DialogContent>
          <DemoUseEffect />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openUseRef}
        onClose={()=>handleClose('useRef')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          UseRef Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('useRef')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUseRef />
          </DialogContent>
      </Dialog>

      <Dialog
        open={openUseCallback}
        onClose={()=>handleClose('useCallback')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          UseCallback Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('useCallback')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUseCallback />
          </DialogContent>
      </Dialog>

      <Dialog
        open={openUseMemo}
        onClose={()=>handleClose('useMemo')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          UseMemo Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('useMemo')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUseMemo />
          </DialogContent>
      </Dialog>

      <Dialog
        open={openUseTransition}
        onClose={()=>handleClose('useTransition')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          UseTransition Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('useTransition')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUseTransition />
          </DialogContent>
      </Dialog>

      <Dialog
        open={openUse}
        onClose={()=>handleClose('use')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
            paper: "dialogPaper",
          }}
      >
        <DialogTitle id="alert-dialog-title">
          Use Example:
          <IconButton
              data-testid="close_icon_svg"
              aria-label="close"
              onClick={()=>handleClose('use')}
            >
              <CloseIcon width="12px" height="12px" fillColour="black" />
            </IconButton>
        </DialogTitle>
        <DialogContent>            
          <DemoUse />
          </DialogContent>
      </Dialog>
 
    </Box>
  );
}