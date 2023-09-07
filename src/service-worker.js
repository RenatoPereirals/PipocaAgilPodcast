self.addEventListener("fetch", (event) => {
  // Intercepta pedidos de navegação
  if (event.request.mode === "navigate") {
    // Crie uma promessa para esperar pelo pedido de pré-carregamento de navegação
    const preloadRequest = event.preloadResponse;

    // Use waitUntil() para esperar pela resolução da promessa
    event.waitUntil(
      (async function () {
        // Aguarde até que a promessa de pré-carregamento seja resolvida
        const response = await preloadRequest;

        // Faça algo com a resposta, se necessário
        if (response) {
          // Faça algo com a resposta pré-carregada, como armazená-la em cache
          // ou manipulá-la de alguma outra forma
        }
      })()
    );
  }
  // Restante do seu código para lidar com outros tipos de pedidos
});
