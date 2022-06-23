import React,{ useState} from 'react';
import {StepProgress} from '../StepProgress/StepProgress';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import Card from '../common/Card/Card';
import './onboarding.scss';
import check from '../../assets/icons/check.png';
import {tabsData,cardsData} from './commonData'


export const Onboarding = () => {
  

  const [tabNumber, setTabNumber] = useState(1);

  /** form state for individual tabs */
  const [user, setUser] = useState({
    fullName: '',
    displayName: '',
  });
  const [workSpace, setWorkSpace] = useState({
    workspaceName: '',
    workspaceURL: '',
  });
  const [usage, setUsage] = useState({
    usage: ''
  });

  /** formState for entire flow */
  const [formState, setFormState] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    usage: '',
  });


  function handleClick(){
    setFormState({...user,...workSpace,...usage});
    if (tabNumber === 3) setTabNumber((tab) => tab + 1);
    if (tabNumber === 4) console.log(formState);
  }


  function handleFormSubmit(e){
    e.preventDefault();
    if (tabNumber === 4) return;
    setTabNumber((tab) => tab + 1);
  }

  return (
    <div className='Onboarding'>
    
      <StepProgress tab={tabNumber} numberSteps={4}/>

      { tabsData[tabNumber-1].mainText &&
        <div className='tabHeader'>
          <span className='tabHeader__main'>{tabsData[tabNumber-1].mainText}</span>
          <span className='tabHeader__sub'>{tabsData[tabNumber-1].subText}</span>
        </div>
      }

      <div className='form_section'>
        { tabNumber === 1 &&
          <form onSubmit={handleFormSubmit} style={{width: '100%'}}>
            <Input 
              id="fullName"
              label="Full Name"
              placeholder='Steve Jobs'
              value={user.fullName}
              onChange={(value) => setUser({...user, 'fullName': value })}
              minLength="2"
              maxLength="25"
            />
            <Input
              id="displayName"
              label="Display Name"
              placeholder='Steve'
              value={user.displayName}
              onChange={(value) => setUser({...user,'displayName': value})}
              minLength="2"
              maxLength="12"
            />
            <Button text="Create Workspace" handleClick={handleClick} /> 
          </form>        
        }

        { tabNumber === 2 &&
          <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
            <Input
              id="workspaceName"
              label="Workspace Name"
              placeholder='Eden'
              value={workSpace.workspaceName}
              onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceName': value })}
              minLength="2"
              maxLength="25"
            />
          
            <Input
              id="workspaceURL"
              label="Workspace URL"
              placeholder='Example'
              value={workSpace.workspaceURL}
              onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceURL': value })}
              minLength="2"
              maxLength="20"
            />
            
            <Button text="Create Workspace" handleClick={handleClick} />
          </form>
        }

        { tabNumber === 3 &&
          <div className='tabThree'>
            <div className='cardsContainer'>
              {cardsData.map((card) => {
                return <Card key={card.id} isActive={card.id === usage.usage} card={card} setUsage={setUsage} /> //handleCardSelect={handleCardSelect}
              })}
            </div>
            <Button text="Create Workspace" handleClick={handleClick} />
          </div>
        }
        
        { tabNumber === 4 &&
          <div className='tabFour'>
            <div className='tabFour__img'>
              <img src={check} alt="check" />
            </div>
            <span style={{ fontSize: '2rem', marginBottom: '1rem', 
                  fontWeight: '600', color: 'var(--color-primary-text-dark)'}}>
                  Congratulations, {formState.displayName}!
            </span>
            <span style={{ fontSize: '.9rem', marginBottom:'2rem', 
                  color: 'var(--color-primary-text-medium)' }}>
                  You have completed onboarding, you can start using the Eden!
            </span>
            <Button text="Launch Eden" handleClick={handleClick} />
          </div>
        }
      </div>

    </div>
  )
}
