import fields from "../fields"

const FieldGenerator = ({formFields, control}) => {
    return(
        <>
        {formFields.map((field)=> {
            
            const Component = fields[field.type] || fields.input;
            return(
                <div key={field.name} className="input-fields">
                <Component control={control} {...field} />
            </div>
            )
        })}</>
    )
}
export default FieldGenerator;