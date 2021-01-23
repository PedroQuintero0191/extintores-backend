import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entity/Customer";
import Exting from "../entity/Exting";
import History from "../entity/History";

export const getCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerData = await getRepository(Customer).find();
  return res.json(customerData);
};

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Customer).findOne(req.params.id);
  return res.json(results);
};

export const createCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let customerGlobalReq = req.body;
  let extingO2m = customerGlobalReq.exting;
  let customerObj = new Customer();
  customerObj.name = customerGlobalReq.name;
  customerObj.address = customerGlobalReq.address;
  customerObj.phone = customerGlobalReq.phone;
  customerObj.doc = customerGlobalReq.doc;
  customerObj.exting = [];
  extingO2m.forEach((extingO2m: any) => {
      let exting: Exting = new Exting();
      exting.serial = extingO2m.serial;
      exting.brand = extingO2m.brand;
      exting.model = extingO2m.model;
      exting.last_recharge = extingO2m.last_recharge;
      exting.next_recharge = extingO2m.next_recharge;
      exting.history = [];
      // extingO2m.history.forEach((item: any) => {
      //   let history: History = new History();
      //   history.extinguisher = item.extinguisher;
      //   history.customer = item.customer;
      //   history.user = item.user;
      //   history.last_recharge = item.last_recharge;
      //   exting.history.push(history);
      // })
      customerObj.exting.push(exting);
  });
  const results = await getRepository(Customer).save(customerObj);
  return res.json(results);
};

export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerData = await getRepository(Customer).findOne(req.params.id);
  if (customerData) {
    let customerGlobalReq = req.body;
    if (customerGlobalReq.name) {
      customerData.name = customerGlobalReq.name;
    }
    if (customerGlobalReq.address) {
      customerData.address = customerGlobalReq.address;
    }
    if (customerGlobalReq.phone) {
      customerData.phone = customerGlobalReq.phone;
    }
    if (customerGlobalReq.doc) {
      customerData.doc = customerGlobalReq.doc;
    }
    if (customerGlobalReq.exting) {
      // delete previous exting data
      // customerData.exting.forEach(async exting => {
      //     // await connection.manager.remove(Power, {id: power.id});
      //     await getRepository(Exting).remove(exting);
      // });
      let updateExting = customerGlobalReq.exting;
      // customerData.exting = [];
      // add new exting data
      updateExting.forEach((item: any) => {
        let exting: Exting = new Exting();
        exting.serial = item.serial;
        exting.brand = item.brand;
        exting.model = item.model;
        exting.last_recharge = item.last_recharge;
        exting.next_recharge = item.next_recharge;
        customerData.exting.push(exting);
      });
    }
    const results = await getRepository(Customer).save(customerData);
    return res.json(results);
  }

  return res.json({msg: 'Customer Not found'});
};