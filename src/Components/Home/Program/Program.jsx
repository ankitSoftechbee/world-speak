import NonWorkingProgram from "./NonWorkingProgram"
import WorkingProgram from "./WorkingProgram"

const Program = (props) => {

    return <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 md:col-span-6">
            <WorkingProgram data={props.data} />
        </div>
        <div className="col-span-12 md:col-span-6">
            <NonWorkingProgram data={props.data} />
        </div>
    </div>
}
export default Program