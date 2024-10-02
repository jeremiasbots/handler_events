/** @param {import("../types/ExtendedClientInterface.d.ts").default} client */
module.exports = async function (client) {
  process.on("uncaughtException", (err, origin) => {
    console.log(
      client.color(`⭐ | Error no capturado: ${err}\nOrigen: ${origin}`).red
    );
  });

  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(
      client.color(`⭐ | Error no capturado: ${err}\nOrigen: ${origin}`).red
    );
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.log(
      client.color(`⭐ | Rechazo no capturado: ${reason}\nPromesa: ${promise}`)
        .red
    );
  });
};
