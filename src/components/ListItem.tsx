import type { User } from "../types/user"; // 두 번을 나가야 하는구나
  
export const ListItem = (props: User) => {
    const {id, name, age, personalColor} = props;

    return(
        <p style={{color: personalColor}}>
            {id} : {name}({age})
        </p>
    )
}