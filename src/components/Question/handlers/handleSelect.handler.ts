export const handleSelect=(setSelected:React.Dispatch<React.SetStateAction<number | null>>,index:number,selected:number|null)=>{

    if(!selected?.toString() || selected != index )setSelected(index)
    else setSelected(null)
}