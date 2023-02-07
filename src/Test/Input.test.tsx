import { fireEvent, render, screen } from '@testing-library/react';
import { InputComponent } from '../components/InputComponent';

test("call function on Change", () => {
    const AddOnTodo = jest.fn();
    render(<InputComponent AddOnTodo={AddOnTodo}/>);
    const input: HTMLInputElement = screen.getByPlaceholderText("add your todo");
    fireEvent.change(input, { target: { value: "testing" } });
    expect(input.value).toBe("testing")
  })

  test("call function on Enter", ()=>{
    const AddOnTodo = jest.fn();
    render(<InputComponent AddOnTodo={AddOnTodo}/>);
    const input = screen.getByPlaceholderText("add your todo");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(AddOnTodo).toHaveBeenCalledWith("");
  } )

  describe('TodoList', () => {
    it('should add an item to the todo list', () => {
      const AddOnTodo = jest.fn();
      render(<InputComponent AddOnTodo={AddOnTodo}/>);
      const input = screen.getByPlaceholderText("add your todo");
      fireEvent.change(input, { target: { value: 'Todo' } });
      const addButton = screen.getByText('Add');
      fireEvent.click(addButton);
      const todo = screen.getByText('Todo');
      expect(todo).toBeInTheDocument();
    });
    it('should move an item from the todo list to the done list', () => {
      const AddOnTodo = jest.fn();
      render(<InputComponent AddOnTodo={AddOnTodo}/>);
      const input = screen.getByPlaceholderText("add your todo");
      const checkbox = screen.getByTestId(21062);
      fireEvent.click(checkbox);
      const todo : HTMLElement= screen.getByText('Todo');
      fireEvent.change(input, { target: { value: todo } });
      expect(todo).not.toBeInTheDocument();
      const done = screen.getByText('Todo');
      expect(done).toBeInTheDocument();
    });
  });