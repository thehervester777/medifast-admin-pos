/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'dashboard' | 'inventory' | 'orders' | 'clients' | 'logistics' | 'analytics' | 'settings' | 'b2b' | 'referral' | 'products' | 'discounts' | 'summary' | 'reports' | 'admins' | 'management' | 'brands' | 'support' | 'notice' | 'api' | 'order_pending' | 'order_accepted' | 'order_process' | 'order_picked' | 'order_rescheduled' | 'order_delivered' | 'order_cancelled' | 'order_returned' | 'order_due' | 'order_cancel_request';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  ndc: string;
  cost: string;
  onHand: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Expiring Soon';
  manufacturer: string;
  image?: string;
}

export interface Order {
  id: string;
  clientId: string;
  clientName: string;
  status: 'New' | 'Approved' | 'Picking' | 'Shipped' | 'On Hold';
  date: string;
  total: string;
  items: number;
  warehouse: string;
  slaTime?: string;
}

export interface Activity {
  id: string;
  type: 'order' | 'stock' | 'system';
  message: string;
  time: string;
  user?: string;
}
