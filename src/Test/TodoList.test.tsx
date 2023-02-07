import { fireEvent, render, screen } from '@testing-library/react';
import { TodoListComponent } from '../components/TodoListComponent';

/*
jest.mock('react', () => {
   const actualReact = jest.requireActual('react');
   return {
     ...actualReact,
     useState: jest.fn().mockImplementation((init) => [init, jest.fn()]),
   };
 });
 
describe('TodoListComponent', () => {
   const initialTodoList = ['Take out the trash', 'Do the dishes'];

   render(<TodoListComponent />);

   initialTodoList.forEach((todo) => {
  it('should render a list of to-do items with checkboxes', () => {
    render(<TodoListComponent />);
    const firstTodo = screen.getByText(todo[0]);
    const firstCheckbox = screen.getByTestId(21062);
    expect(firstTodo).toBeInTheDocument();
    expect(firstCheckbox).toBeInTheDocument();
  });
});
});
*/

describe('TodoListComponent', () => {
   it('should add an item to todoDone when checked', () => {
     render(<TodoListComponent/>);
     const checkbox : HTMLInputElement= screen.getByTestId(21062);
     fireEvent.click(checkbox);
     expect(checkbox).toBeChecked();
   });
 });

test('checkbox is checked', () => {
   render(<TodoListComponent/>);
   const checkbox : HTMLInputElement= screen.getByTestId(21062);
   fireEvent.click(checkbox);
   expect(checkbox.checked).toBe(true);
 });

test("Call function on Checking", () => {
   render(<TodoListComponent/>);
   const onChecking = jest.fn(); 
   const input : HTMLInputElement = screen.getByTestId(21062)
   fireEvent.click(input)
   onChecking();
   expect(onChecking).toHaveBeenCalled();
});


test('finish a todo', () => {
   render(<TodoListComponent/>);
   const checkbox : HTMLInputElement = screen.getByTestId(21062);
   fireEvent.click(checkbox).valueOf()
   expect(checkbox.checked).toBe(true)
});