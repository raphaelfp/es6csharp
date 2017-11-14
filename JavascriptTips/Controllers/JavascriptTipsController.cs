using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JavascriptTips.Controllers
{
    public class JavascriptTipsController : Controller
    {
        // GET: JavascriptTips
        public ActionResult Index()
        {
            return View();
        }

        // GET: JavascriptTips/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: JavascriptTips/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: JavascriptTips/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: JavascriptTips/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: JavascriptTips/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: JavascriptTips/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: JavascriptTips/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
