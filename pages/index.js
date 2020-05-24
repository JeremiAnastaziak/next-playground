import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material/react-button';
import TextField, {Input} from '@material/react-text-field';
import Select from '@material/react-select';
import TopAppBar, {
    TopAppBarFixedAdjust,
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';

export default function Home() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
                        </TopAppBarIcon>
                        <TopAppBarTitle>Miami, FL</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                        <TopAppBarIcon actionItem tabIndex={0}>
                            <MaterialIcon
                                aria-label="print page"
                                hasRipple
                                icon='print'
                                onClick={() => console.log('print')}
                            />
                        </TopAppBarIcon>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust>
                    <TabBar>
                        <Tab>
                            <span className='mdc-tab__text-label'>One</span>
                        </Tab>
                        <Tab>
                            <span className='mdc-tab__text-label'>Two</span>
                        </Tab>
                        <Tab>
                            <span className='mdc-tab__text-label'>Three</span>
                        </Tab>
                    </TabBar>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label='First name'
                name="firstName"
                dense
            ><Input
                ref={input => register({required: true, maxLength: 80})(input)} name="firstName"/>
            </TextField>
          <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
          <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
          <Select name="Title" ref={register({ required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </Select>

          <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
          <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

            <Button type="submit">Submit</Button>
        </form>
            </TopAppBarFixedAdjust>

        </div>

    );
}
