export default function Navbar({ search }) {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React Crypto
          </a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => search(e.target.value)}
            />
            <button class="btn btn-outline-success">Search</button>
          </form>
        </div>
      </nav>
    );
  }
  