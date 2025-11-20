// 1. Простое использование then
console.log("Задание 1: then");
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 1000);
});
promise1.then((result) => console.log("Результат:", result));

// 2. Использование catch
console.log("\nЗадание 2: catch");
const promise2 = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Произошла ошибка!")), 1000);
});
promise2.catch((err) => console.error("Ошибка:", err.message));

// 3. Использование finally
console.log("\nЗадание 3: finally");
const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Готово!"), 1000);
});
promise3
  .then((result) => console.log("Успех:", result))
  .finally(() => console.log("Блок finally: операция завершена"));

// 4. Использование async/await
console.log("\nЗадание 4: async/await");
async function waitForTwoSeconds() {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("Ждали 2 секунды"), 2000);
  });
  console.log("Результат await:", result);
}
waitForTwoSeconds();

// 5. Обработка ошибок в async/await
console.log("\nЗадание 5: async/await + try/catch");
async function handleRejection() {
  try {
    await new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Отклонено!")), 1000);
    });
  } catch (err) {
    console.error("Поймана ошибка в async:", err.message);
  }
}
handleRejection();

// 6. Параллельное выполнение с Promise.all
console.log("\nЗадание 6: Promise.all");
const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 800));
const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 500));
const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 1200));

Promise.all([p1, p2, p3])
  .then((results) => console.log("Все результаты:", results))
  .catch((err) => console.error("Ошибка в Promise.all:", err.message));

// 7. Использование Promise.race
console.log("\nЗадание 7: Promise.race");
const r1 = new Promise((resolve) => setTimeout(() => resolve("Первый"), 1000));
const r2 = new Promise((resolve) => setTimeout(() => resolve("Второй"), 300));
const r3 = new Promise((resolve) => setTimeout(() => resolve("Третий"), 700));

Promise.race([r1, r2, r3]).then((winner) =>
  console.log("Первый завершившийся:", winner)
);

// 8. Цепочка промисов с несколькими then
console.log("\nЗадание 8: Цепочка then");
new Promise((resolve) => resolve(10))
  .then((num) => {
    console.log("Шаг 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Шаг 2:", num);
    return num + 5;
  })
  .then((num) => {
    console.log("Шаг 3:", num);
    return num.toString() + "!";
  })
  .then((result) => console.log("Итог цепочки:", result));

// 9. Использование Promise.resolve
console.log("\nЗадание 9: Promise.resolve");
Promise.resolve("Мгновенный успех!").then((result) =>
  console.log("Promise.resolve:", result)
);

// 10. Использование Promise.reject
console.log("\nЗадание 10: Promise.reject");
Promise.reject(new Error("Мгновенный отказ!")).catch((err) =>
  console.error("Promise.reject:", err.message)
);
