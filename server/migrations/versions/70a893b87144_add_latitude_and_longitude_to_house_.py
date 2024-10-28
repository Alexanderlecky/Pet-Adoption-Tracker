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
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('houses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('latitude', sa.Float(), nullable=False))
        batch_op.add_column(sa.Column('longitude', sa.Float(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('houses', schema=None) as batch_op:
        batch_op.drop_column('longitude')
        batch_op.drop_column('latitude')

    # ### end Alembic commands ###