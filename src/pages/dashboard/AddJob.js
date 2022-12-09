import Wrapper from "../../assets/wrappers/DashboardFormPage";
import {FormRow, FormRowSelect} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {handleChange, clearValues} from "../../features/job/jobSlice";

const AddJob = () => {
    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        isEditing,
        editJobId,
    } = useSelector((store) => store.job)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!position || !company || !jobLocation) {
            toast.error('Please fill out all fields')
            return
        }
    }
    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}))
    }
    return (
        <Wrapper>
            <form className={'form'}>
                <h3>{isEditing ? 'Edit' : 'add'} job</h3>
                <div className="form-center">
                    <FormRow
                        type='text'
                        name='position'
                        value={position}
                        handleChange={handleJobInput}
                        />
                    <FormRow
                        type='text'
                        name='company'
                        value={company}
                        handleChange={handleJobInput}
                    />
                    <FormRow
                        type='text'
                        labelText='job location'
                        name='jobLocation'
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />
                    {/* job status */}
                    <FormRowSelect
                        name='status'
                        value={status}
                        options={statusOptions}
                        handleChange={handleJobInput}
                        label
                    />
                    <FormRowSelect
                        name='jobType'
                        value={jobType}
                        options={jobTypeOptions}
                        handleChange={handleJobInput}
                        labelText='job type'
                    />
                    <div className="btn-container">
                        <button type={"button"} className={'btn btn-block btn-clear'} onClick={() => dispatch(clearValues())}>clear</button>
                        <button type={"submit"} className={'btn btn-block btn-submit'} onClick={handleSubmit} disabled={isLoading}>submit</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

export default AddJob;