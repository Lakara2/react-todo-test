import { fireEvent, render, screen } from '@testing-library/react';
import { TodoDev } from '../components/TodoDev';
import { InputComponent } from '../components/InputComponent';

describe('TodoDev', () => {
  it('should display the todo list', () => {
    const AddOnTodo = jest.fn();
    render(<InputComponent AddOnTodo={AddOnTodo}/>);
    const todo : HTMLInputElement = screen.getByPlaceholderText("add your todo");
    expect(todo).toBeInTheDocument();
  });
});

  describe('Test counter', () => {
    it('should display the Counter component', () => {
        render(<TodoDev />);
      const counter = screen.getByText('0');
      expect(counter).toBeInTheDocument();
    });
  });


describe('TodoListComponent', () => {
    it('should add an item to todoDone when checked', () => {
        render(<TodoDev />);
      const checkbox : HTMLInputElement= screen.getByTestId(21062);
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });
 
 test('checkbox is checked', () => {
    render(<TodoDev />);
    const checkbox : HTMLInputElement= screen.getByTestId(21062);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
 
 test("Call function on Checking", () => {
    render(<TodoDev />);
    const onChecking = jest.fn(); 
    const input : HTMLInputElement = screen.getByTestId(21062)
    fireEvent.click(input)
    onChecking();
    expect(onChecking).toHaveBeenCalled();
 });
 
 
 test('finish a todo', () => {
    render(<TodoDev />);
    const checkbox : HTMLInputElement = screen.getByTestId(21062);
    fireEvent.click(checkbox).valueOf()
    expect(checkbox.checked).toBe(true)
 });
