module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://www.google.com/search?q=girl+working+on+laptop+illustration&sxsrf=AJOqlzViCWjXJPsl7So6XyzH26AUXbUzUQ:1678312865012&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXg5DRqs39AhUoTjABHfCZCowQ_AUoAXoECAEQAw&biw=1415&bih=716&dpr=2#imgrc=Ctrm6K0XaeApxM')",
        },
      },
    },
    plugins: [],
  };