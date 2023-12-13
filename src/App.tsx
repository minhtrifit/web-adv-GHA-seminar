import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { add, multi, sub, divide } from "./helpers/action";

const App = () => {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (firstValue !== "" && secondValue && action !== "") {
      switch (action) {
        case "add":
          setResult(add(Number(firstValue), Number(secondValue)));
          break;

        case "sub":
          setResult(sub(Number(firstValue), Number(secondValue)));
          break;

        case "multi":
          setResult(multi(Number(firstValue), Number(secondValue)));
          break;

        case "divide":
          setResult(divide(Number(firstValue), Number(secondValue)));
          break;

        default:
          setResult(null);
          break;
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "80px",
        }}
      >
        SIMPLE CACULATOR
      </p>
      <Form
        style={{ width: "400px" }}
        className="col-3 mx-auto mt-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Value</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first value"
            onChange={(e) => {
              setFirstValue(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Second Value</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter second value"
            onChange={(e) => {
              setSecondValue(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Action</Form.Label>
          <Form.Select
            onChange={(e) => {
              setAction(e.target.value);
            }}
          >
            <option>-- Choose caculate action --</option>
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="multi">Multi</option>
            <option value="divide">Devide</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Caculate
        </Button>
      </Form>

      <p
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "50px",
        }}
      >
        Result: {result !== null && result}
      </p>
    </div>
  );
};

export default App;
