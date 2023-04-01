import { Box, Stepper, Step, StepLabel, StepIcon, Avatar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Steps.css'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '20px',
    marginBottom:'3%'
  },
  stepper: {
    background: 'linear-gradient(to right, #ffffff, #ffffff)',
    boxShadow: '0 5px 10px rgba(0,0,0,0.10), 0 4px 4px rgba(0,0,0,0.13)',
    borderRadius: '10px',
  },
  stepIcon: {
    color: '#fff',
  },
  stepContent: {
    marginTop: '10px',
    borderRadius: '10px',
  },
    smallAvatar: {
    width: 56,
    height: 56,
  },
    smallTitle: {
    fontSize: '1.4rem',
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});

const Steps = ({no}) => {
  const classes = useStyles();
  const steps = [
    {
      img:'/images/apply.png',
      title:'Apply for the Interview',
      content:'We will Review your Application', 
    },
    {
      img:'/images/technicalInterview1.png',
      title:'Technical Interview 1',
      content:'Candidates are interviewed via phone or video call', 
    },
    {
      img:'/images/technicalInterview2.png',
      title:'Technical Interview 2',
      content:'Candidates are given tasks related to the specific position ', 
    },
    {
      img:'/images/hrRound.png',
      title:'HR Round',
      content:"Assessing the candidate's fit for the company and role.", 
    },
  ];
  return (
    <>
   <div className="horStep">
    <div className="container">
      <div className="row stepsRecru">
        <p>Our four steps Recruitment process</p>
      </div>
    </div>
    <Box className={classes.root}>
      <Stepper activeStep={0} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >
              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  alt="Interview Round photos"
                  src={label.img}
                  className={classes.smallAvatar}
                  sx={{ width: 56, height: 56,}}
                  style={{display:'flex', justifyContent:'center', alignSelf:'center'}}
                />
              </Container>

              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <p className={classes.smallTitle}>{label.title}</p>
              </Container>
              
            </StepLabel>

            <Box className={classes.stepContent}>
              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <p>{label.content}</p>
              </Container>    
            </Box>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>

    <div className="verStep">
    <div className="container">
      <div className="stepsRecru">
        <p>Our four steps Recruitment process</p>
      </div>
    </div>
    <Box className={classes.root}>
      <Stepper activeStep={0} alternativeLabel className={classes.stepper1} orientation="vertical">
        {steps.map((label) => (
          <Step key={label} style={{ display: 'flex', justifyContent: 'center',flexDirection:'column',width:'100%',marginTop:'20px' }}>
            <StepLabel className={classes.stepper} style={{ display: 'flex', justifyContent: 'center',padding:'10px'}}>
              <Container style={{ display: 'flex', justifyContent: 'center', }}>
                <Avatar
                  alt="Interview Round photos"
                  src={label.img}
                  className={classes.smallAvatar}
                  sx={{ width: 56, height: 56,}}
                  style={{display:'flex', justifyContent:'center', alignSelf:'center'}}
                />
              </Container>

              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <p className={classes.smallTitle}>{label.title}</p>
              </Container>
              <Box className={classes.stepContent}>
              <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <p>{label.content}</p>
              </Container>    
            </Box>
            </StepLabel>

            
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
    </>
  );
};

export default Steps;

