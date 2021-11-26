export default function New() {
  return (
    <div>
      <h2>Add your own hilarious joke</h2>
      <form>
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}
