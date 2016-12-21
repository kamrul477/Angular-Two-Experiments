﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public  class ProductContext : DbContext
    {
        public ProductContext() : base("ProductDb")
        {
            
        }
        public virtual DbSet<Product> Products { get; set; }

    }
}
