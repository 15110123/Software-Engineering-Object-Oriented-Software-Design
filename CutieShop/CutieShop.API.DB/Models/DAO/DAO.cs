//ReSharper disable All
using System;
using System.Collections.Generic;

namespace CutieShop.API.DB.Models.DAO
{
    public abstract class DAO<TId, TObj> : IDAO<TId, TObj>
    {
        private dynamic DbContext;

        protected DAO(dynamic dbContext)
        {
            DbContext = dbContext;
        }

        public bool Create(TObj obj)
        {
            throw new NotImplementedException();
        }

        public TObj Read(TId id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TObj> ReadAll()
        {
            throw new NotImplementedException();
        }

        public bool Update(TObj obj)
        {
            throw new NotImplementedException();
        }

        public bool Delete(TId id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            DbContext.Dispose();
        }
    }
}
