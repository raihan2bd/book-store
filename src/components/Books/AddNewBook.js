import React from 'react';
import Card from '../UI/Card';

const AddNewBook = () => (
  <Card>
    <h3>Add New Book</h3>
    <form>
      <div>
        <input type="text" placeholder="Book Title" />
      </div>
      <div>
        <select>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </div>
      <div>
        <button type="button">Add Book</button>
      </div>
    </form>
  </Card>
);

export default AddNewBook;
