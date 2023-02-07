import { Select } from "@chakra-ui/react";


const InputGroup = ({ total, name, setActualNum }) => {
    return (
      <div >
        <Select
          onChange={(e) => setActualNum(e.target.value)}
          id={name}
        >
          <option  >Episode</option>
          {[...Array(total).keys()].map((x) => {
            return (
              <option key={x + 1}  value={x + 1}>
                {name} - {x + 1}
              </option>
            );
          })}
        </Select>
      </div>
    );
  };
  
  export default InputGroup;