import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', (req, res) => {
  res.send('ok');
});

// List products
router.get('/products', (req, res) => {
  res.send('ok');
});

// Create product
router.post('/products', (req, res) => {
  res.send('ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
