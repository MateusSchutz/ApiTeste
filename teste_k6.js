
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = 'http://localhost:5000/usuarios';
  const payload = JSON.stringify({ nome: 'Teste', email: 'teste@ex.com' });

  const params = { headers: { 'Content-Type': 'application/json' } };

  let resPost = http.post(url, payload, params);
  check(resPost, { 'POST status 201': (r) => r.status === 201 });

  let resGet = http.get(url);
  check(resGet, { 'GET status 200': (r) => r.status === 200 });

  let id = JSON.parse(resPost.body).id;
  let resPut = http.put(`${url}/${id}`, JSON.stringify({ nome: 'Editado' }), params);
  check(resPut, { 'PUT status 200': (r) => r.status === 200 });

  let resDel = http.del(`${url}/${id}`);
  check(resDel, { 'DELETE status 200': (r) => r.status === 200 });
}
