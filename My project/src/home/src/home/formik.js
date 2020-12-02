import React from 'react';
import { Formik, Field, Form, ErrorMessage ,FieldArray, getIn} from 'formik';
import * as Yup from 'yup';

const validate  = Yup.object().shape({
    username:Yup.array.apply().of(
        Yup.object().shape({
            fname:Yup.string().required("required"),
            fname:Yup.string().required("required")
        })
    )
})

function Signup(){
return(
    <div>
<Formik  initialValues = {{username :[{id:1,fname:"",lname:""}]}} validationSchema={validate}
onSubmit={()=>{}}> 
{({values,errors})=>{
    <Form>
        <FieldArray name="username">
            {( { push }) =>{
                <div>
                    {values.username.map((val,ind)=>{
                        const name = `username[${ind}].fname`
                        const errorMessage = getIn(errors,name);

                        return(
                            <div key = {val.id}>
                                <Field name ={name} />
                                <Field name ={`username[${ind}].lname`}/>

                            </div>
                        )
                    })}
                    <button ></button>
                </div>
            }}

        </FieldArray>
    </Form>
}}
    
</Formik>
    </div>
)
}

export default Signup