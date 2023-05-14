import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import AdjustInventoryPage from './pages/AdjustInventoryPage';
import ConductInventoryPage from './pages/ConductInventoryPage';
import ConfirmReorderPage from './pages/ConfirmReorderPage';
import DashboardPage from './pages/DashboardPage';
import ExecuteShipmentPage from './pages/ExecuteShipmentPage';
import InventoryAdjustmentTriggerPage from './pages/InventoryAdjustmentTriggerPage';
import InventoryAllocationPage from './pages/InventoryAllocationPage';
import InventoryStatusPage from './pages/InventoryStatusPage';
import LoginPage from './pages/LoginPage';
import OrderDataPage from './pages/OrderDataPage';
import ReorderTriggerPage from './pages/ReorderTriggerPage';
import ReportInventoryResultsPage from './pages/ReportInventoryResultsPage';
import ShippingArrangementsPage from './pages/ShippingArrangementsPage';
import SupplierSelectionPage from './pages/SupplierSelectionPage';
import TrackShipmentPage from './pages/TrackShipmentPage';
import VerifyInventoryPage from './pages/VerifyInventoryPage';

import { AuthService, InventoryService, NotificationService, OrderService, ReportService, ShippingService, SupplierService } from './services';
import { Item, Supplier } from './models';
import Header from './parts/Header';
import SideNavigation from './parts/SideNavigation';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage authService={new AuthService()} onLoginSuccess={() => { }} />} ></Route>
          <Route path='/auth' element={<><Header /><SideNavigation /><div className="App"><Outlet /></div></>}>
            <Route index element={<DashboardPage inventoryService={new InventoryService()} notificationService={new NotificationService()} orderService={new OrderService()} />} />
            <Route path='dashboard' element={<DashboardPage inventoryService={new InventoryService()} notificationService={new NotificationService()} orderService={new OrderService()} />} />
            <Route path='adjust-inventory' element={<AdjustInventoryPage inventoryService={new InventoryService()} />} />
            <Route path='conduct-inventory' element={<ConductInventoryPage inventoryService={new InventoryService()} />} />
            <Route path='confirm-reorder' element={<ConfirmReorderPage item={{ id: '', name: '', description: '', quantity: 0, reorderPoint: 0, unitPrice: 0 } as Item} quantity={0} supplier={{ id: '', name: '', email: '', phone: '', address: { street: '', city: '', state: '', zipCode: '', country: '' } } as Supplier} />} />
            <Route path='execute-shipment' element={<ExecuteShipmentPage orderId='' />} />
            <Route path='inventory-adjustment-trigger' element={<InventoryAdjustmentTriggerPage inventoryService={new InventoryService()} reportService={new ReportService()} />} />
            <Route path='inventory-allocation' element={<InventoryAllocationPage inventoryService={new InventoryService()} shippingService={new ShippingService()} />} />
            <Route path='inventory-status' element={<InventoryStatusPage inventoryService={new InventoryService()} />} />
            <Route path='order-data' element={<OrderDataPage inventoryService={new InventoryService()} orderService={new OrderService()} />} />
            <Route path='reorder-trigger' element={<ReorderTriggerPage inventoryService={new InventoryService()} supplierService={new SupplierService()} />} />
            <Route path='report-inventory-results' element={<ReportInventoryResultsPage inventoryService={new InventoryService()} reportService={new ReportService()} />} />
            <Route path='shipping-arrangements' element={<ShippingArrangementsPage orderId='' />} />
            <Route path='supplier-selection' element={<SupplierSelectionPage selectedItem={{} as any} />} />
            <Route path='track-shipment' element={<TrackShipmentPage />} />
            <Route path='verify-inventory' element={<VerifyInventoryPage inventoryService={new InventoryService()} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
