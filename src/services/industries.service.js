export function get() {
    return fetch('https://pharaoh.candor-usa.com/industries')
      .then(data => data.json())
  }