module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.do$/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getLivelist.do\?type=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/refreshLivelist.do$/,
      respondwith: './livelist-refresh.json'
    }
  ]
}