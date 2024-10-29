"""Add latitude and longitude to House model

Revision ID: 70a893b87144
Revises: a701ebaf5c1e
Create Date: 2024-10-28 16:44:16.229036

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70a893b87144'
down_revision = 'a701ebaf5c1e'
branch_labels = None
depends_on = None


def upgrade():
    # No changes in the upgrade as latitude and longitude are not needed.
    pass


def downgrade():
    # Remove references to latitude and longitude, as they were never added.
    pass
